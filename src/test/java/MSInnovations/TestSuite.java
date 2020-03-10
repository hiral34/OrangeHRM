package MSInnovations;

import org.testng.annotations.Test;

import org.testng.asserts.SoftAssert;

public class TestSuite extends BaseTest{
    LoginPage loginPage = new LoginPage();

    @Test
    public void verifyUserOnLoginPage(){

        loginPage.verifyUserOnLoginPage();
    }
}

