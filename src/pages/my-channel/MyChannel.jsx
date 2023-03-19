import React, { useState, useEffect } from "react";
import {
  Input,
  Container,
  Image,
  Row,
  Button,
  Modal,
  Text,
  Checkbox,
} from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useAccount } from "wagmi";
import "./styles.css";
import UserList from "../list/UserList";
import { videos } from "../../dummyArrays";
import { Link } from "@nextui-org/react";

const dummyProfile = {
  // channelName: "John Doe",
};

const MyChannel = () => {
  const location = useLocation();
  const [edit, setEdit] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [background, setBackground] = useState(
    "https://picsum.photos/1400/269"
  );
  const { address, isConnected } = useAccount();
  const channelAddress = location.pathname.split("/")[2];
  const [name, setName] = useState(dummyProfile?.channelName || channelAddress);

  const handleSave = () => {
    setEdit(false);
  };
  const handleCancel = () => {
    setEdit(false);
    setName(dummyProfile?.channelName || channelAddress);
  };

  useEffect(() => {
    if (isConnected) {
      setName(dummyProfile?.channelName || channelAddress);
    } else {
      setName("");
    }
  }, [isConnected]);

  const handleChangeBackground = (e) => {
    setChangeBackground((prev) => !prev);
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setBackground(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const closeHandler = () => {
    setChangeBackground(false);
  };

  return (
    <Container style={{ padding: "0" }}>
      <Row>
        <Image
          css={{
            borderRadius: "16px",
            maxW: "100%",
            maxH: "269px",
            objectFit: "cover",
          }}
          width={"100%"}
          src={background}
          alt="Background photo"
        />
        {address === channelAddress && (
          <span
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "10px",
              bottom: "10px",
              backgroundColor: "#000",
              width: "15px",
              height: "15px",
              padding: "5px",
              borderRadius: "40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
            onClick={() => setChangeBackground((prev) => !prev)}
          >
            &#9998;
          </span>
        )}
      </Row>
      <Row align="center" css={{ marginTop: "30px", marginLeft: "10px" }}>
        <Image
          width={"fit-content"}
          css={{
            borderRadius: "50%",
            marginRight: "20px",
            maxW: "50px",
            minW: "50px",
          }}
          src={"https://picsum.photos/50/50"}
          alt="profile image"
        />

        <Input
          placeholder="channel name"
          readOnly={!edit}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {address === channelAddress && (
          <>
            <div style={{ marginLeft: "20px" }}>
              {edit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0 15px",
                  }}
                >
                  <Button
                    size={"xs"}
                    onClick={handleCancel}
                    color={"secondary"}
                  >
                    cancel
                  </Button>
                  <Button size={"xs"} onClick={handleSave}>
                    Save
                  </Button>
                </div>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setEdit(true)}
                >
                  &#9998;
                </span>
              )}
            </div>
            <div>
              <Link href="/create-video">Upload Video</Link>
            </div>
          </>
        )}
      </Row>
      <Row>
        <UserList items={videos} />
      </Row>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={changeBackground}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Upload Background Image
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            type={"file"}
            onChange={handleChangeBackground}
            style={{ height: "unset" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MyChannel;
