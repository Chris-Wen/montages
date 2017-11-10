/*1.对用户名进行验证*/
uname.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '用户名不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.tooShort) {
    this.nextElementSibling.innerHTML = '用户名不能少于3位';
    this.nextElementSibling.className = 'msg-error';
  } else {
    var that = this;
    if (!that.value) {   //用户没有输入任何内容
      return;
    }


    $.ajax({
      url: 'data/user/check_uname.php',
      data: {uname: that.value},
      success: function (result) {
        if (result.code === 201) {
          that.nextElementSibling.innerHTML = '用户名已被占用';
          that.nextElementSibling.className = 'msg-error';
        } else if (result.code === 200) {
          that.nextElementSibling.innerHTML = '用户名可以使用';
          that.nextElementSibling.className = 'msg-success';
          upwd.focus();
        } 
      }
    })
  }
}


uname.onfocus = function () {
  this.nextElementSibling.innerHTML = '用户名长度在3到12位之间';
  this.nextElementSibling.className = 'msg-default';
}
/*2.对密码进行验证*/


upwd.onfocus = function () {
  this.nextElementSibling.innerHTML = '密码长度在6到12位之间';
  this.nextElementSibling.className = 'msg-default';
}


upwd.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '密码不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.tooShort) {
    this.nextElementSibling.innerHTML = '密码长度不能少于6位';
    this.nextElementSibling.className = 'msg-error';
  } else {
    this.nextElementSibling.innerHTML = '密码格式正确';
    this.nextElementSibling.className = 'msg-success';
  }
}


/*2.对确认密码进行验证*/
upwdconfirm.onfocus = function () {
  this.nextElementSibling.innerHTML = '密码长度在6到12位之间';
  this.nextElementSibling.className = 'msg-default';
}


upwdconfirm.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '确认密码不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.tooShort) {
    this.nextElementSibling.innerHTML = '确认密码长度不能少于6位';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.value != upwd.value) {
    this.nextElementSibling.innerHTML = '两次输入的密码一致';
    this.nextElementSibling.className = 'msg-error';
  } else {
    this.nextElementSibling.innerHTML = '两次输入的密码一致';
    this.nextElementSibling.className = 'msg-success';
  }
}


/*3.对邮箱地址进行验证*/
email.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '邮箱不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.typeMismatch) {
    this.nextElementSibling.innerHTML = '邮箱格式不正确';
    this.nextElementSibling.className = 'msg-error';
  } else {
    var that = this;
    if (!that.value) {   //用户没有输入任何内容
      return;
    }
    $.ajax({
      url: 'data/user/check_email.php',
      data: {email: that.value},
      success: function (result) {
        if (result.code === 201) {
          that.nextElementSibling.innerHTML = '该邮箱已经注册过';
          that.nextElementSibling.className = 'msg-error';
        } else if (result.code === 200) {
          that.nextElementSibling.innerHTML = '该邮箱可以使用';
          that.nextElementSibling.className = 'msg-success';
          phone.focus();
        } 
      }
    })
  }
}



email.onfocus = function () {
  this.nextElementSibling.innerHTML = '请输入合法的邮箱地址';
  this.nextElementSibling.className = 'msg-default';
}



/*4.对手机号进行验证*/
phone.onblur = function () {
  if (this.validity.valueMissing) {
    this.nextElementSibling.innerHTML = '手机号不能为空';
    this.nextElementSibling.className = 'msg-error';
  } else if (this.validity.patternMismatch) {
    this.nextElementSibling.innerHTML = '手机号格式不正确';
    this.nextElementSibling.className = 'msg-error';
  } else {
    var that = this;
    if (!this.value) {   //用户没有输入任何内容
      return;
    }
    $.ajax({
      url: 'data/user/check_phone.php',
      data: {phone: that.value},
      success: function (result) {
        if (result.code === 201) {
          that.nextElementSibling.innerHTML = '该电话已经注册过';
          that.nextElementSibling.className = 'msg-error';
        } else if (result.code === 200) {
          that.nextElementSibling.innerHTML = '该电话可以使用';
          that.nextElementSibling.className = 'msg-success';
        } 
      }
    })
  }
}



phone.onfocus = function () {
  this.nextElementSibling.innerHTML = '请输入合法的手机号';
  this.nextElementSibling.className = 'msg-default';
}




/**注册按钮监听函数**/
$('#bt-register').click(function () {
  var count = 0;
  $('.form-group').each(function () {

    if ($(this).find('span').hasClass('msg-success')) {
      count++;
    }
  });
  if (count == 5) {
    $.ajax({
        type: 'POST',
        url: 'data/user/register.php',
        data: $('#form-register').serialize(),
        success: function(result){

          if(result.code===200){
            $("#popup").show(500);
            
            $('#alertMsg').click( (e)=>{

              window.event? window.event.returnValue = false : e.preventDefault();

              

              location.href = 'index.html';
            })
          }
        }
      }
    )
  }
})