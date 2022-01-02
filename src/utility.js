export const PRESENT = "Present";

export function initializePostObj(obj, folder) {
  obj.forEach((post) => {
    post.liked = false;
    post.imgs.forEach(
      (url, i, self) => (self[i] = process.env.PUBLIC_URL + folder + url)
    );
    post.tags.forEach(
      (tag, i, self) => (self[i] = tag.replace(" ", "_").toLowerCase())
    );
  });
}

export function compareDates(a, b) {
  let moment = require("moment");
  let a_date = a.endDate === "" ? a.startDate : a.endDate;
  let b_date = b.endDate === "" ? b.startDate : b.endDate;

  if (a_date === PRESENT) {
    if (b_date === PRESENT) {
      a_date = a.startDate;
      b_date = b.startDate;
    } else {
      return false;
    }
  } else if (b_date === PRESENT && a_date !== PRESENT) {
    return true;
  }

  const a_moment_object = moment(a_date, "MM-YYYY");
  const b_moment_object = moment(b_date, "MM-YYYY");

  if (moment(a_moment_object).isSame(b_moment_object, "month")) {
    return a.title < b.title;
  } else if (moment(a_moment_object).isBefore(b_moment_object, "month")) {
    return true;
  }
}

export function onGoing() {
  let moment = require("moment");
  return moment().format("MM-YYYY");
}
