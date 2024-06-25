document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form',{
    errorFieldCssClass: "is-invalid",
    errorLabelCssClass: "is-label-invalid",
    errorLabelStyle: {
      color: "red",
      textDecoration: "underlined",
    },
  });

  validation
    .addField('.input-name', [{
        rule: 'minLength',
        value: 3,
        errorMessage:'Ошибка',
      },
    ])
    .addField('.input-email', [{
        rule: 'email',
        errorMessage: 'Ошибка',
      }
    ])

})
