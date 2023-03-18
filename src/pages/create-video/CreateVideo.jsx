import React from "react";
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from "@nextui-org/react";

const CreateVideo = () => {
  const handleSubmit = () => {
    console.log("submited");
  };
  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: "100vh", w: "100%" }}
      >
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Card css={{ mw: "100%", p: "20px" }}>
            <Text
              size={24}
              weight="bold"
              css={{
                as: "center",
                mb: "20px",
              }}
            >
              NextUI Login
            </Text>
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Title"
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Description"
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Video link"
            />
            <Spacer y={1} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              placeholder="Thumbnail"
            />
            <Row justify="space-between">
              <Checkbox>
                <Text size={14}>+18 content</Text>
              </Checkbox>
            </Row>
            <Spacer y={1} />
            <Button type="submit">Upload Video</Button>
          </Card>
        </form>
      </Container>
    </div>
  );
};
export default CreateVideo;
