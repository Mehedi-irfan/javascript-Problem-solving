function sendNotification(emailAddress) {
  const email = emailAddress.split("@");
  const userName = email[0];
  const domain = email[1];
  if (emailAddress.includes("@")) {
    return `${userName} sent you an email from ${domain}`;
  } else {
    return `Invalid email`;
  }
}
const email = sendNotification("mehediirfan99@gmail.com");
console.log(email);
