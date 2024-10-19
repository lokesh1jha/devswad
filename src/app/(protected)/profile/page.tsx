import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { createClient } from "../../../../utils/supabase/server";

export default async function Profile() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      <Card className="p-8">
        <CardTitle className="text-xs font-normal text-muted-foreground">
          Hello,
        </CardTitle>
        <CardDescription>
          <div className="text-xl font-bold">{user.name || user.email}</div>
          <div className="mt-4 grid gap-y-8 md:grid-x-8 md:grid-cols-2">
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="text-muted-foreground text-lg font-bold">
                {user.email}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground flex justify-between">
                <span>Address</span>{" "}
                <span className="text-xs text-foreground underline cursor-pointer">
                  + Add Address
                </span>
              </div>
              <div className="text-muted-foreground text-lg font-bold">
                {user.address.length > 0
                  ? user.address.map((address) => (
                    <div key={address}>{address}</div>
                  ))
                  : "No address available"}
              </div>
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
        </CardDescription>
      </Card>
    </div>
  );
}
