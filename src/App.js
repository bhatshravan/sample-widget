import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { IconShare } from "@tabler/icons";
import { Button } from "@mantine/core";
import { Input, Tooltip } from "@mantine/core";
import { IconBrandTwitter, IconAlertCircle } from "@tabler/icons";
import { Select } from "@mantine/core";
import { forwardRef } from "react";
import { IconChevronDown } from "@tabler/icons";
import { IconX } from "@tabler/icons";
import { IconQuestionMark, IconLink } from "@tabler/icons";
import { Group, Avatar, Text, ActionIcon, Badge, Center, Grid, Stack, Switch } from "@mantine/core";

let mockData = [
  {
    image: "/Logo.png",
    name: "Everyone at Oslash",
    members: "25",
    email: "oslash@olash.com",
    access: "No access",
    type: "group",
  },
];
let mockDataPerson = [
  {
    image: "/Logo.png",
    name: "Tom Hank",
    email: "tom@olash.com",
    access: "No access",
  },
  {
    image: "/Logo.png",
    name: "Peter Bellosh",
    email: "peter@olash.com",
    access: "No access",
  },
];
let mockDataGroup = [
  {
    image: "/Logo.png",
    name: "Engineering",
    members: "25",
    email: "oslash@olash.com",
    access: "No access",
  },
];

let mockCurrent = {
  image: "/Logo.png",
  name: "Peter Bellosh",
  email: "peter@olash.com",
  access: "No access",
};

function App(props) {
  const [openType, setopenType] = useState("none");
  const [shareList, setshareList] = useState(mockData);
  const [personList, setpersonList] = useState(mockDataPerson.slice(0, 2));
  const [groupList, setgroupList] = useState(mockDataGroup.slice(0, 2));
  const [currentSelected, setcurrentSelected] = useState(null);
  const [currentAccess, setcurrentAccess] = useState("Full Access");
  const [currentInp, setCurrentInp] = useState(null);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if(personList.length>0){
        setcurrentSelected({...personList[0],"type":"person"});
      }
      if(groupList.length>0){
        setcurrentSelected({...groupList[0],"type":"group"});
      }
    }
  }
  useEffect(() => {
    if (currentInp && currentInp.length > 0) {
      let inp = currentInp.toLowerCase();
      
      setpersonList(
        mockDataPerson
          .filter((x) => {
            let Xname = x.name.toLowerCase();
            let Xemail = x.email.toLowerCase()
            return Xemail.includes(inp) || Xname.includes(inp);
          })
          .slice(0, 2)
      );
      setgroupList(
        mockDataGroup
          .filter((x) => {
            let Xname = x.name.toLowerCase();
            let Xemail = x.email.toLowerCase()
            return Xemail.includes(inp) || Xname.includes(inp);
          })
          .slice(0, 2)
      );
    } else {
      setgroupList(mockDataGroup.slice(0, 2));
      setpersonList(mockDataPerson.slice(0, 2));
    }
  }, [currentInp]);

  const removeButton = (
    <ActionIcon size="xs" color="dark.8" radius="xl" variant="transparent">
      <IconX size={14} />
    </ActionIcon>
  );
  return (
    <div className="container">
      <Button
        color="dark"
        rightIcon={<IconShare size={14} />}
        loaderPosition="right"
        onClick={() => {
          setopenType("all");
        }}>
        Share
      </Button>
      {openType === "all" && (
        <Stack spacing={"0"} className="addUserSection1">
          <Group className="box-1-main">
            <Avatar src={"/globe.png"} className="box-1" />
            <Stack spacing="1">
              <Text size="sm">{"Share to web"}</Text>

              <Text size="sm" color="gray.5">
                {"Publish and share link with anyone"}
              </Text>
            </Stack>
            <Switch style={{ right: "20px" }} className="section2Select" />
          </Group>

          <Grid justify="space-around" style={{ margin: "0px 5px" }}>
            <Grid.Col span={12} style={{ paddingRight: "30px" }}>
              <Input
                placeholder="People, emails, groups"
                onClick={() => {
                  setopenType("addUser");
                }}
                rightSection={<Button color="gray.3">Invite</Button>}
              />
            </Grid.Col>
          </Grid>

          <div className="box-2-main">
            {shareList.map((ele, idx) => {
              return (
                <Group className="box-2-main">
                  <Avatar src={ele.image} className="box-1" />
                  <Stack spacing="1">
                    <Text size="sm">{ele.name}</Text>

                    <Text size="sm" color="gray.5">
                      {ele.type === "group" ? `${ele.members} working members` : ele.email}
                    </Text>
                  </Stack>
                  <Select
                    style={{ maxWidth: "100px" }}
                    placeholder={ele.access}
                    variant="unstyled"
                    data={[
                      { value: "fullAccess", label: "Full access" },
                      { value: "edit", label: "Can edit" },
                      { value: "view", label: "Can view" },
                      { value: "none", label: "No access" },
                    ]}
                    itemComponent={SelectItem}
                    rightSection={<IconChevronDown size={14} />}
                    styles={{ rightSection: { pointerEvents: "none" } }}
                    className="section2Select"
                  />
                </Group>
              );
            })}
          </div>
          <Stack className="bg-gray">
            <Group
              spacing={1}
              noWrap
              className="addUserSection3"
              sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
              <img src="/Icon.png" width={12} />
              <Text size="sm" style={{ paddingLeft: "5px" }}>
                {"learn about sharing"}
              </Text>
              <Group className="section2Select">
                <IconLink size={18} />
                <span
                  size="md"
                  color="gray.9"
                  style={{ paddingLeft: "0px", color: "#111827", fontWeight: "500" }}>
                  {"Copy link"}
                </span>
              </Group>
            </Group>
          </Stack>
        </Stack>
      )}

      {openType === "addUser" && (
        <Center>
          <Stack
            spacing={"1"}
            sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}
            className="addUserSection2">
            <Grid grow justify="space-around" style={{ margin: "0px 5px" }}>
              {currentSelected ? (
                <Grid.Col span={6}>
                  <Badge
                    variant="outline"
                    radius="sm"
                    rightSection={removeButton}
                    color="gray.5"
                    onClick={()=>{
                      setcurrentSelected(null);
                      setCurrentInp(null);
                    }}
                    style={{ marginBop: "5px", height: "100%" }}>
                    {currentSelected.name}
                  </Badge>
                </Grid.Col>
              ) : (
                <Grid.Col span={6}>
                  <Input
                    variant="unstyled"
                    placeholder="Search emails, names or groups"
                    onChange={(e) => {
                      setCurrentInp(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                  />
                </Grid.Col>
              )}

              <Grid.Col span={3}>
                <Select
                  style={{}}
                  placeholder={"Full access"}
                  variant="unstyled"
                  data={[
                    { value: "fullAccess", label: "Full access" },
                    { value: "edit", label: "Can edit" },
                    { value: "view", label: "Can view" },
                    { value: "none", label: "No access", color: "red" },
                  ]}
                  itemComponent={SelectItem}
                  rightSection={<IconChevronDown size={14} />}
                  rightSectionWidth={30}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  onChange={(e)=>{
                    setcurrentAccess(e.target.value);
                  }}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Button variant="outline" color="dark.3" radius="md" onClick={()=>{
                  let newList = [...shareList];
                  console.log("🚀 ~ file: App.js ~ line 257 ~ <Buttonvariant ~ newList", newList)
                  newList.push({
                    ...currentSelected,
                    "access":currentAccess
                  })
                  setshareList(newList);
                  setopenType("all");
                  setCurrentInp("")
                }}>
                  Invite
                </Button>
              </Grid.Col>
            </Grid>
            {personList && personList.length > 0 && (
              <div className="bg-white" gutter={"1"} style={{ padding: "10px 0px" }}>
                <div className="addUserSelect addUserInput" style={{ marginBottom: "5px" }}>
                  Select a person
                </div>
                {personList.map((ele, idx) => {
                  return (
                    <Group spacing={"xs"} noWrap className={idx===0  && groupList.length===0? `addUserSelect addUserSelectHover`:` addUserSelect` } onClick={()=>{
                      setcurrentSelected({...personList[idx],"type":"person"});
                    }}>
                      <Avatar src={ele.image} />
                      <div>
                        <Text size="sm">{ele.name}</Text>
                      </div>
                    </Group>
                  );
                })}
              </div>
            )}
            {groupList && groupList.length > 0 && (
              <div className="bg-white" gutter={"1"} style={{ padding: "10px 0px" }}>
                <div className="addUserSelect addUserInput" style={{ marginBottom: "5px" }}>
                  Select a group
                </div>
                {groupList.map((ele, idx) => {
                  return (
                    <Group spacing={"xs"} noWrap className={idx===0 && personList.length===0? `addUserSelect addUserSelectHover`:` addUserSelect` } onClick={()=>{
                      setcurrentSelected({...groupList[idx],"type":"group"});
                    }}>
                      <Avatar src={ele.image} />
                      <div>
                        <Text size="sm">{ele.name}</Text>
                      </div>
                    </Group>
                  );
                })}
              </div>
            )}
            <Stack className="bg-gray">
              <Group
                spacing={1}
                noWrap
                className="addUserSection3"
                ssx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
                <img src="/Icon.png" width={12} />
                <Text size="sm" style={{ paddingLeft: "5px" }}>
                  {"learn about sharing"}
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Center>
      )}
    </div>
  );
}

const SelectItem = forwardRef(({ label, color, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <div>
        <Text size="sm" color={color}>
          {label}
        </Text>
      </div>
    </Group>
  </div>
));
export default App;
