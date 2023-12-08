//
$(document).ready(function () {
  const menuItems = $(".menu-item");
  const forms = $(".form");

  menuItems.on("click", function () {
    if (!$(this).hasClass("disabled")) {
      forms.css("display", "none");

      menuItems.removeClass("active");

      forms.eq($(this).index()).css("display", "block");

      $(this).addClass("active");
    }
  });

  // Show the first form by default
  menuItems.eq(0).click();

  $("#submitFirstFormButton").on("click", function () {
    // Validate the form fields here
    const form = $("#firstForm");
    if (form[0].checkValidity()) {
      menuItems.eq(1).click();
    } else {
      $("input, select, textarea").each(function (index) {
        var input = $(this);
        input.css("background-color", "yellow");
      });
      $("#label-name").html("Name is Required");
      $("#label-selectOne").html("Please Select an Option");
      $("#label-description").html("Please give  description");
      $("#errorField1").html("Please fill out all required fields.");
    }
  });

  // Add event listener for the "Submit" button in Step 2
  $("#submitSecondFormButton").on("click", function () {
    // Validate the form fields here
    const form = $("#secondForm");
    if (form[0].checkValidity()) {
      menuItems.eq(2).click();
    } else {
      $("#errorField2").html("Please fill out all required fields.");
    }
  });

  $("#submitThirdFormButton").on("click", function () {
    // Validate the form fields here
    const form = $("#thirdForm");
    if (form[0].checkValidity()) {
      menuItems.eq(0).click();
    } else {
      $("#errorField3").html("Please fill out all required fields.");
    }
  });

  // Back Buttons

  // Back to first Form from Second Form
  $("#backToFirstForm").on("click", function () {
    menuItems.eq(0).click();
  });

  // Back to Second Form from Third Form
  $("#backToSecondForm").on("click", function () {
    menuItems.eq(1).click();
  });

  const checkbox1 = $('input[name="checkbox1"]');
  const checkbox2 = $('input[name="checkbox2"]');
  const extraFieldOne = $("#extraFieldOne");
  const extraFieldTwo = $("#extraFieldTwo");

  checkbox1.on("change", function () {
    if (checkbox1.is(":checked")) {
      extraFieldOne.css("display", "block");
    } else {
      extraFieldOne.css("display", "none");
    }
  });

  checkbox2.on("change", function () {
    if (checkbox2.is(":checked")) {
      extraFieldTwo.css("display", "block");
    } else {
      extraFieldTwo.css("display", "none");
    }
  });

  // Add event listener for Form Second Radio Box Handler
  const radioFirstChecked = $('input[name="radioYesOne"]');
  const radioFirstUnChecked = $('input[name="radioNoOne"]');
  const radioSecondChecked = $('input[name="radioYesTwo"]');
  const radioSecondUnChecked = $('input[name="radioNoTwo"]');
  const radioThirdChecked = $('input[name="radioYesThree"]');
  const radioThirdUnChecked = $('input[name="radioNoThree"]');
  const radioFourthChecked = $('input[name="radioYesFour"]');
  const radioFourthUnChecked = $('input[name="radioNoFour"]');

  const extraInputOne = $("#extraInputOne");
  const extraInputTwo = $("#extraInputTwo");
  const extraInputThree = $("#extraInputThree");
  const extraInputFour = $("#extraInputFour");

  radioFirstChecked.on("change", function () {
    if (radioFirstChecked.is(":checked")) {
      extraInputOne.css("display", "block");
      radioFirstUnChecked.prop("checked", false); // Uncheck 'radioFirstUnChecked'
    } else {
      extraInputOne.css("display", "none");
    }
  });

  radioFirstUnChecked.on("change", function () {
    if (radioFirstUnChecked.is(":checked")) {
      extraInputOne.css("display", "none");
      radioFirstChecked.prop("checked", false);
    }
  });

  radioSecondChecked.on("change", function () {
    if (radioSecondChecked.is(":checked")) {
      extraInputTwo.css("display", "block");
      radioSecondUnChecked.prop("checked", false); // Uncheck 'radioSecondUnChecked'
    } else {
      extraInputTwo.css("display", "none");
    }
  });

  radioSecondUnChecked.on("change", function () {
    if (radioSecondUnChecked.is(":checked")) {
      extraInputTwo.css("display", "none");
      radioSecondChecked.prop("checked", false);
    }
  });

  radioThirdChecked.on("change", function () {
    if (radioThirdChecked.is(":checked")) {
      extraInputThree.css("display", "block");
      radioThirdUnChecked.prop("checked", false); // Uncheck 'radioSecondUnChecked'
    } else {
      extraInputThree.css("display", "none");
    }
  });

  radioThirdUnChecked.on("change", function () {
    if (radioThirdUnChecked.is(":checked")) {
      extraInputThree.css("display", "none");
      radioThirdChecked.prop("checked", false);
    }
  });

  radioFourthChecked.on("change", function () {
    if (radioFourthChecked.is(":checked")) {
      extraInputFour.css("display", "block");
      radioFourthUnChecked.prop("checked", false); // Uncheck 'radioSecondUnChecked'
    } else {
      extraInputFour.css("display", "none");
    }
  });

  radioFourthUnChecked.on("change", function () {
    if (radioFourthUnChecked.is(":checked")) {
      extraInputFour.css("display", "none");
      radioFourthChecked.prop("checked", false);
    }
  });
});
