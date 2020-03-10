package MSInnovations;

//import io.cucumber.java.en.Given;
//import io.cucumber.java.en.When;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;




public class MyStepdefs extends Utils{
    LoginPage loginPage = new LoginPage();
    @Given("user is on Login page")
    public void userIsOnLoginPage() {
        loginPage.verifyUserOnLoginPage();
    }


    @When("^User enters invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEntersInvalidAnd(String username, String password)  {
        loginPage.userEntersCredentials(username,password);

    }

    @Then("^valid \"([^\"]*)\" must be displayed on the screen$")
    public void validMustBeDisplayedOnTheScreen(String errorMsg)  {
        loginPage.chkMessage(errorMsg);

    }
}
