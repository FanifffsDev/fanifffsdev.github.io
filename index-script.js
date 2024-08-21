function showGradePanel() {
    document.getElementById('gradePanel').style.display = 'flex';
}

function hideGradePanel(event) {
    if (event.target === event.currentTarget) {
        document.getElementById('gradePanel').style.display = 'none';
    }
}