
function searchTable(searchInputId, tableClass) {
    const searchInput = document.getElementById(searchInputId);
    const table = document.querySelector(tableClass);
    const rows = table.getElementsByTagName('tr');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        for (let i = 1; i < rows.length; i++) { // Bỏ qua hàng đầu tiên (header)
            const cells = rows[i].getElementsByTagName('td');
            let rowContainsQuery = false;

            for (let j = 0; j < cells.length; j++) {
                if (cells[j].textContent.toLowerCase().includes(query)) {
                    rowContainsQuery = true;
                    break;
                }
            }

            if (rowContainsQuery) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });
}

// Gọi hàm tìm kiếm cho từng bảng
searchTable('input1', '.goods table');
searchTable('input2', '.PAM table');
function toggleActionMenu(icon) {
    const menu = icon.nextElementSibling;

    
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }

    
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== icon) {
            menu.style.display = 'none';
        }
    });
}

function changeStatus(button, newStatus) {
    const row = button.closest('tr');
    const statusCell = row.querySelector('.status-cell .status-text');

    
    statusCell.textContent = newStatus;

   
    const menu = button.closest('.action-menu');
    menu.style.display = 'none';

    console.log('Đã thay đổi trạng thái:', newStatus);
}
// đổi 
const navbarItems = document.querySelectorAll('.navbar-item');

    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa class 'active' khỏi tất cả các mục
            navbarItems.forEach(nav => nav.classList.remove('active'));

            // Thêm class 'active' cho mục được click
            this.classList.add('active');
        });
    });




