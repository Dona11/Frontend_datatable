$(document).ready(function () {
  $('#tab').DataTable({
      processing: true,
      serverSide: true,
      ajax: {
          url: 'http://127.0.0.1:8080/index.php',
          type: 'POST',
      },
      columns: [
          { data: 'id' },
          { data: 'birth_date' },
          { data: 'first_name' },
          { data: 'last_name' },
          { data: 'gender' },
      ],
  });


  
});