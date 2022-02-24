 $(document).ready(function() {
    $('.mydatatable').DataTable({
        initComplete: function (settings, json) {
            $('#test_filter input').unbind();
            $('#test_fiter input').bind('keyup', function(e) {
                if(e.keyCode === 13) {
                    oTable.search(this.value).draw();
                }
            })
        }
    });
});