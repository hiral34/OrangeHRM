package MSInnovations;

import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags="@LoginsTests", plugin={"pretty","html:target/Destination"})
public class RunTest {

}
