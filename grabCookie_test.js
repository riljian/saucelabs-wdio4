Feature("grabCookie");

Scenario("grabCookie", I => {
  I.amOnPage("/");
  I.grabCookie();
});
