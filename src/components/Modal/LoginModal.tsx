"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch, useSelector, } from "react-redux";
import { login } from "../../store/Slice/auth.slice";

type Props = {
  user: boolean;
  setUser: (value: boolean) => void;
};

type LoginFormValues = {
  email: string;
  password: string;
};

export function DialogDemo({ user, setUser }: Props) {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const dispatch=useDispatch()
  
  function onSubmit(value: LoginFormValues) {
    console.log(value);
    
    axios.post("https://nt.softly.uz/api/auth/login", value)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data))
      dispatch(login(res.data))
      setUser(false); 
    }).catch((err) => {
      console.error("Login failed", err);
    });
  }
  
  return (
    <Dialog
      open={user}
      onOpenChange={(open) => {
        setUser(open);
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#33698D]">
            Kirish yoki ro'yxatdan o'tish
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="py-3">
                  <FormLabel className="text-[#33698D]">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="pb-2">
                  <FormLabel className="text-[#33698D]">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
             <Button type="submit" className="bg-[#33698D] w-full">
              Login
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
