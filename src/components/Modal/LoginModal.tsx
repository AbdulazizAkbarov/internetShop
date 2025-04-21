"use Client";
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
import { login } from "../layout/store/Slice/auth.slice";

type Props = {
  user: boolean;
  setUser: (value: boolean) => void;
};


export function DialogDemo({ user, setUser }: Props) {
  const form = useForm();
  const dispatch=useDispatch()
  
  function onSubmit(value: any) {

    axios.post("https://nt.softly.uz/api/auth/login", value)
    .then((res) => {
      console.log(res.data);
      dispatch(login(res.data))
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
            <Button type="submit" className="bg-[#33698D] w-full" onClick={()=>{
              setUser(false)
            }}>
              Login
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
