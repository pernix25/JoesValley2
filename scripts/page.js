/* theme button */
document.getElementById('themeButton').addEventListener('click', () => {
    let theme = document.getElementById('darkTheme')
    if (theme) {
        theme.remove();
    } else {
        let stylesheet = document.createElement('link');

        stylesheet.rel = 'stylesheet';
        stylesheet.href = 'css/darkTheme.css';
        stylesheet.id = 'darkTheme';

        document.head.appendChild(stylesheet);}

})