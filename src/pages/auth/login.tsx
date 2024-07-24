import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  return (
    <div className="w-full lg:h-screen flex flex-wrap lg:content-start">
      <div className="flex h-full w-full lg:flex-1 items-center justify-center order-2 lg:order-1 lg:mt-0 mt-10">
        <div className="lg:mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="mb-6">
            <Label htmlFor="email" className="mb-2 inline-block">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
      <div className="flex w-full lg:flex-1 items-center justify-center bg-gray-50 order-1 lg:order-2 h-[150px] lg:h-full">
        <div className="w-1/3 min-w-[250px] h-[100px] bg-white rounded shadow-md"></div>
      </div>
    </div>
  );
}

export default Login;
