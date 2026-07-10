"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6 md:max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Update your account details</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" defaultValue="Sofia Ratsu" />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" defaultValue="sofia@tcpw.io" />
          </Field>
          <div>
            <Button>Save changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose what you want to hear about</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Field orientation="horizontal" className="justify-between">
            <FieldLabel htmlFor="n-email" className="font-normal">
              Email notifications
            </FieldLabel>
            <Switch id="n-email" defaultChecked />
          </Field>
          <Field orientation="horizontal" className="justify-between">
            <FieldLabel htmlFor="n-push" className="font-normal">
              Push notifications
            </FieldLabel>
            <Switch id="n-push" />
          </Field>
          <Field orientation="horizontal" className="justify-between">
            <FieldLabel htmlFor="n-weekly" className="font-normal">
              Weekly summary
            </FieldLabel>
            <Switch id="n-weekly" defaultChecked />
          </Field>
        </CardContent>
      </Card>
    </div>
  );
}
