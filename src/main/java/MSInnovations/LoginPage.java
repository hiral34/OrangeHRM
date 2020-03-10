package MSInnovations;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

public class LoginPage extends Utils{

    private By _username = By.id("txtUsername");
    private By _password = By.id("txtPassword");
    private By _loginButton = By.id("btnLogin");
    private By _actualMessage = By.id("spanMessage");
    String strActual="";
    String strExpected="";
    SoftAssert softAssert = new SoftAssert();

    public void verifyUserOnLoginPage(){
        assertURL("https://opensource-demo.orangehrmlive.com");
    }
    public void userEntersCredentials(String strUsername, String strPassword){
        writeText(_username,strUsername);
        writeText(_password,strPassword);
        clickOnElement(_loginButton);
    }
    public void chkMessage(String errorMsg){
        strActual = getTextElement(_actualMessage);
        strExpected = errorMsg;
        //System.out.println("Actual: "+ strActual);
        //System.out.println("Expected: "+ strExpected);
        softAssert.assertEquals(strActual,strExpected,"Error message do not match.");
        softAssert.assertAll();
    }

}

