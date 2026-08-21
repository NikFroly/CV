toggle?.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.dataset.view = "CL";
  } else {
    document.body.dataset.view = "CV";
  }
});