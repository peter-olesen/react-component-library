import { Section } from "../components/Section/Section";
import { Button } from "../components/Button/Button";
import { InputField } from "../components/InputField/InputField";
import { Copyright } from "../components/Copyright/Copyright";
import { truncateText } from "../helpers/truncateText";
import { Heading } from "../components/Heading/Heading";
import { Newsletter } from "../components/Newsletter/Newsletter";
import { Navigation } from "../components/Navigation/Navigation";
import { CurrentTime } from "../components/CurrentTime/CurrentTime";
import { ConsentBanner } from "../components/ConsentBanner/ConsentBanner";

export const Home = () => {
  return (
    <div>
      <ConsentBanner />
      <Heading level="2">react-component-library</Heading>
      <CurrentTime />
      <Navigation />
      <Newsletter />
      <Section w="200px" h="100px" m="2rem 1rem" bc="#000" tc="#fff">
        123
      </Section>
      <Button
        bc="red"
        bd="1px solid #000"
        br="1rem"
        action={() => alert("123")}
      >
        This is button
      </Button>
      <InputField
        name="namefield"
        id="namefield"
        label="name field"
        placeholder="Placeholder"
        bd="1px solid red"
        p="1rem"
        ol="none"
        required={true}
        action={(value) => console.log(value)}
      />

      {truncateText("text that needs to be truncated", 10)}
      <Copyright siteName="Some site name herp derp." />
    </div>
  );
};
