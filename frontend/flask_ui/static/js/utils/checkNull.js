export function checkNull(e) {
  if (e.value === "") {
    // e.classList.add("input-error");
    // e.parentNode.classList.add("input-error");
    e.className = "tp-input-body-error"
    e.parentNode.className = "tp-input-error"
    return false;
  } else {
    // e.classList.remove("input-error");
    // e.parentNode.classList.remove("input-error");
    e.className = "tp-input-body"
    e.parentNode.className = "tp-input"
    return true;
  }
}

export function checkNullLogin(e) {
  if (e.value === "") {
    e.classList.add("input-error");
    e.parentNode.classList.add("input-error");
    return false;
  } else {
    e.classList.remove("input-error");
    e.parentNode.classList.remove("input-error");
    return true;
  }
}