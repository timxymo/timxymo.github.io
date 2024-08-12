document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.learn-more-btn');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            let url;
            switch(index) {
                case 0:
                    url = 'https://example.com/cutting-board-1'; // Replace with actual URL
                    break;
                case 1:
                    url = 'https://example.com/cutting-board-2'; // Replace with actual URL
                    break;
                case 2:
                    url = 'https://example.com/cutting-board-3'; // Replace with actual URL
                    break;
                case 3:
                    url = 'https://example.com/cutting-board-4'; // Replace with actual URL
                    break;
                default:
                    url = '#';
                    break;
            }
            window.location.href = url;
        });
    });
});