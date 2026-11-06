// =========================================
// تفاعلات واجهة الطالب (Student Dashboard Logic)
// =========================================

document.addEventListener('DOMContentLoaded', function() {
  console.log("تم تحميل واجهة الطالب بنجاح.");
});

// دالة التحقق من الموقع وتسجيل الحضور (GPS Mock)
function submitSmartAttendance(subjectName, secretCode) {
  const inputCode = document.getElementById('secretCodeInput').value.trim();

  if (!inputCode) {
    alert("يرجى إدخال الكود السري للمحاضرة أولاً.");
    return;
  }

  if (!navigator.geolocation) {
    alert("خاصية تحديد الموقع الجغرافي (GPS) غير مدعومة في متصفحك.");
    return;
  }

  alert("جاري التحقق من موقعك الجغرافي (GPS)...");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // تجريبي: إظهار نجاح الحضور بعد قراءة الإحداثيات
      alert(`تم التحقق من النطاق الجغرافي بنجاح!\nالإحداثيات: (${lat.toFixed(4)}, ${lng.toFixed(4)})\nتم تسجيل حضورك في المحاضرة.`);
    },
    (error) => {
      alert("تعذر تحديد موقعك. يرجى السماح لصلاحيات الـ GPS والتأكد من فتح الموقع على جهازك.");
    }
  );
}

// إرسال الشكوى
function submitComplaint() {
  const text = document.getElementById('complaintText').value.trim();
  if (!text) {
    alert("يرجى كتابة نص الشكوى أولاً.");
    return;
  }
  alert("تم إرسال الشكوى بنجاح إلى إدارة الكلية.");
  document.getElementById('complaintText').value = "";
}
