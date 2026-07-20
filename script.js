// دالة عرض القسم المطلوب وإخفاء الباقي
function showSection(sectionId) {
    // إخفاء جميع الأقسام
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // إظهار القسم المطلوب
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }

    // تحديث القائمة النشطة
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // تفعيل الرابط المضغوط (سيتم تحديده بواسطة onclick)
    // بدلاً من ذلك، نبحث عن الرابط الذي يحتوي على نفس onclick
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') === `showSection('${sectionId}')`) {
            link.classList.add('active');
        }
    });
}

// تشغيل تأثيرات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل القسم الأول بشكل افتراضي
    showSection('home');

    // إضافة تأثير حركة لأشرطة التقدم (اختياري)
    const progressBars = document.querySelectorAll('.progress-bar div');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});