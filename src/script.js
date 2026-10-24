// تفاعلات خفيفة
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = "translateY(-15px) scale(1.05)";
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = "translateY(0) scale(1)";
    });
});
