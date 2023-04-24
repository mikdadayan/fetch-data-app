export function formatDate(dateStr: string): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month, day] = dateStr.split("-");

  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}

export function createdAtDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function replaceEmailWithAsterisks(email: string): string {
  const [username, currentDomain] = email.split("@");
  const asterisks = "\\*".repeat(currentDomain.split(".")[0].length);
  const newDomain =
    asterisks + "." + currentDomain.split(".").slice(1).join(".");
  return `${username}@${newDomain}`;
}

export function sortStr(sort: string, path: string) {
  console.log("Here");
  console.log(path);

  const sortArr = sort.split(",");
  console.log(sortArr);

  let sortQuery = "";
  if (sortArr.indexOf(path) > -1) {
    console.log("test1", sortQuery);
    sortQuery = sortArr.filter((item) => item !== path).join("");
    return sortQuery;
  }
  sortArr.push(path);
  sortQuery = sortArr.join("");
  console.log("test2", sortQuery);

  return sortQuery;
}

// export function sortStr(sort, path: string) {
//     sort.filter()
// }

export function getViewsColor(views: number): string {
  if (views >= 0 && views <= 25) {
    return "tomato";
  } else if (views >= 26 && views <= 50) {
    return "orange";
  } else if (views >= 51 && views <= 75) {
    return "yellow";
  } else if (views >= 76 && views <= 100) {
    return "green";
  } else {
    return "black";
  }
}

export function isLoggedIn(): boolean {
  return Boolean(localStorage.getItem("token"));
}

export function generateToken() {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).substring(2, 10);
  return timestamp + random;
}
