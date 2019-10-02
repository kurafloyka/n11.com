$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sahabt/Documents/n11.com/src/main/java/com/qa/features/n11.feature");
formatter.feature({
  "line": 1,
  "name": "n11.com Applications Test",
  "description": "",
  "id": "n11.com-applications-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5824509191,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate n11.com Home Page Test",
  "description": "",
  "id": "n11.com-applications-test;validate-n11.com-home-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enterss username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "logout the website",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 723219948,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1190002238,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.validate_logged_in_username()"
});
formatter.result({
  "duration": 32132477710,
  "error_message": "org.openqa.selenium.WebDriverException: Unable to convert: {actions\u003d[org.openqa.selenium.interactions.Sequence@5489c777]}\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convert(BeanToJsonConverter.java:68)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:231)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:119)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:712)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\n\tat com.qa.pages.HomePage.logOutLink(HomePage.java:75)\n\tat com.qa.stepdefinations.HomePageSteps.validate_logged_in_username(HomePageSteps.java:38)\n\tat ✽.Then logout the website(/Users/sahabt/Documents/n11.com/src/main/java/com/qa/features/n11.feature:7)\nCaused by: org.openqa.selenium.WebDriverException: Unable to convert: {actions\u003d[org.openqa.selenium.interactions.Sequence@5489c777]}\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:87)\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convert(BeanToJsonConverter.java:65)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:231)\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:119)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:712)\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:638)\n\tat com.qa.pages.HomePage.logOutLink(HomePage.java:75)\n\tat com.qa.stepdefinations.HomePageSteps.validate_logged_in_username(HomePageSteps.java:38)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\nCaused by: org.openqa.selenium.WebDriverException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027FarukAkyol.local\u0027, ip: \u0027fe80:0:0:0:18c9:15a0:b2f6:a745%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:214)\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:154)\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:142)\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:85)\n\t... 47 more\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:197)\n\t... 50 more\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"header\"]/div/div/div[2]/div[2]/div[2]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027FarukAkyol.local\u0027, ip: \u0027fe80:0:0:0:18c9:15a0:b2f6:a745%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d77.0.3865.40 (f484704e052e0b556f8030b65b953dce96503217-refs/branch-heads/3865@{#442}), userDataDir\u003d/var/folders/2x/5cyyxzb943sgmv0pkyzw83740000gn/T/.com.google.Chrome.7UIUTD}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dMAC, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:59456}, acceptInsecureCerts\u003dfalse, browserVersion\u003d77.0.3865.90, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue}]\nSession ID: 7e504d4a6d68caee0dad5d4181b04986\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header\"]/div/div/div[2]/div[2]/div[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.getWrappedElement(Unknown Source)\n\tat org.openqa.selenium.interactions.PointerInput$Origin.asArg(PointerInput.java:203)\n\tat org.openqa.selenium.interactions.PointerInput$Move.encode(PointerInput.java:154)\n\tat org.openqa.selenium.interactions.Sequence.encode(Sequence.java:75)\n\tat org.openqa.selenium.interactions.Sequence.toJson(Sequence.java:84)\n\t... 55 more\n",
  "status": "failed"
});
formatter.after({
  "duration": 926057296,
  "status": "passed"
});
});