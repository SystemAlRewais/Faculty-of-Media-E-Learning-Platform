// =========================================
// نظام تسجيل الدخول والتحقق (Frontend Mock)
// =========================================

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const role = document.getElementById('userRole').value;
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const msgDiv = document.getElementById('loginMessage');

      if (role === 'admin') {
        // بيانات الإدارة: كود admin | كلمة المرور 5656
        if (username === 'admin' && password === '5656') {
          msgDiv.style.color = 'green';
          msgDiv.innerText = 'تم تسجيل الدخول بنجاح، جاري التحويل...';
          setTimeout(() => {
            window.location.href = 'admin-dashboard.html';
          }, 1000);
        } else {
          msgDiv.style.color = 'red';
          msgDiv.innerText = 'خطأ في بيانات الإدارة (الكود: admin / المرور: 5656)';
        }
      } else {
        // حساب طالب تجريبي للاختبار (أي كود وباسورد)
        if (username.length > 0 && password.length > 0) {
          msgDiv.style.color = 'green';
          msgDiv.innerText = 'مرحباً بك، جاري تحويلك لوحة الطالب...';
          setTimeout(() => {
            window.location.href = 'student-dashboard.html';
          }, 1000);
        } else {
          msgDiv.style.color = 'red';
          msgDiv.innerText = 'يرجى إدخال الكود وكلمة المرور';
        }
      }
    });
  }
});

// دالة تغيير نص الحقل حسب نوع الدخول
function toggleRoleFields() {
  const role = document.getElementById('userRole').value;
  const label = document.getElementById('codeLabel');
  const input = document.getElementById('username');
  
  if (role === 'admin') {
    label.innerText = 'كود الإدارة';
    input.placeholder = 'أدخل كود الإدارة (admin)';
    input.value = 'admin';
  } else {
    label.innerText = 'كود الطالب';
    input.placeholder = 'أدخل كود الطالب الخاص بك';
    input.value = '';
  }
}

// دالة تسجيل الخروج العامة
function logout() {
  window.location.href = 'index.html';
}
