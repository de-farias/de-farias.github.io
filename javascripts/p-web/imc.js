(function() {
  $(function() {
    return $(document).on('submit', '#imc-calculator-form', function(evt) {
      var answer, height, weight;
      evt.preventDefault();
      evt.stopPropagation();
      weight = parseFloat($('#imc-weight').val());
      height = parseFloat($('#imc-height').val());
      answer = [];
      if (isNaN(weight)) {
        answer.push('Peso inválido');
      }
      if (isNaN(height) || height === 0) {
        answer.push('Altura inválida');
      }
      if (!answer.length) {
        if (height > 100) {
          height = height / 100;
        }
        answer.push((weight / (Math.pow(height, 2))).toFixed(2, 10));
      }
      return $('#imc-result').html(answer.join('; '));
    });
  });

}).call(this);
