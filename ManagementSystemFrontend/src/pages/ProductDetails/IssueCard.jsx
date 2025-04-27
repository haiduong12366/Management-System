import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssue } from "@/Redux/Issue/Action";
import { BASE_URL } from "@/config/api";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssueDetails from "../IssueDetails/IssueDetails";

const IssueCard = ({ item, projectId }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIssueDelete = () => {
    dispatch(deleteIssue(item.id));
  };
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="rounded-md py-1 pb-2">
        <div className="flex justify-between items-center">

          <Dialog>
            <DialogTrigger>
              <DialogClose>
                <CardTitle className="cursor-pointer">{item.title}</CardTitle>
              </DialogClose>
            </DialogTrigger>
            <DialogContent className="w-full max-w-7xl">
              <DialogHeader>Issue detail</DialogHeader>
              <IssueDetails issueId={item.id} projectId={projectId}/>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleIssueDelete}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - {1}</p>
          <DropdownMenu className="border border-red-400 w-[30rem]">
            <DropdownMenuTrigger>
              <Button
                className="rounded-full bg-gray-900 hover:text-black text-white"
                size="icon"
                variant="ghost"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserList issueDetails={item} />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
