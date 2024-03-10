$(document).ready(function() {
  // Add Task
  $('#addTaskBtn').click(function() {
      var taskText = $('#newTaskInput').val().trim();
      if (taskText !== '') {
          $('#taskList').append('<div class="task-item d-flex align-items-center"><input type="checkbox" class="form-check-input me-3">' + taskText + '<button class="btn btn-info ms-auto edit-task">Edit</button><button class="btn btn-danger ms-2 delete-task">Delete</button></div>');
          $('#newTaskInput').val('');
      }
  });

  // Edit Task
  $(document).on('click', '.edit-task', function() {
      var taskText = $(this).siblings('input[type="checkbox"]').next().text();
      $('#editedTask').val(taskText);
      $('#editTaskModal').modal('show');
      var $taskItem = $(this).parent();
      $('#saveTaskChanges').off('click').on('click', function() {
          var editedText = $('#editedTask').val().trim();
          if (editedText !== '') {
              $taskItem.find('input[type="checkbox"]').next().text(editedText);
              $('#editTaskModal').modal('hide');
          }
      });
  });

  // Delete Task
  $(document).on('click', '.delete-task', function() {
      $(this).parent().remove();
  });

  // Check/Uncheck Task
  $(document).on('change', 'input[type="checkbox"]', function() {
      $(this).siblings('button.edit-task').prop('disabled', $(this).is(':checked'));
      $(this).siblings('button.edit-task').toggleClass('disabled');
      $(this).parent().toggleClass('completed');
  });
});