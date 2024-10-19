"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getOrders } from "@/lib/utils_mockdata";
import { SelectTrigger } from "@radix-ui/react-select";

export default function CreateRequest() {
  const orders = getOrders();

  return (
    <div className="container p-8 mx-auto flex w-full justify-center items-center">
      <Card className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Create Request</h1>
        <CardDescription className="grid gap-4">
          <Select>
            <SelectTrigger className="w-[150px] border border-gray-300 rounded-md py-2">
              <SelectValue placeholder="Select an order" />
            </SelectTrigger>
            <SelectContent>
              {orders.length > 0 ? (
                <SelectGroup>
                  {orders.map((order) => (
                    <SelectItem value={order.id}>{order.id}</SelectItem>
                  ))}
                </SelectGroup>
              ) : (
                <SelectItem value="no-orders">No orders available</SelectItem>
              )}
            </SelectContent>
          </Select>
          <Textarea className="mb-4 mt-2" />
        </CardDescription>
        <Button type="submit" className="w-full">
          Create Request
        </Button>
      </Card>
    </div>
  );
}
