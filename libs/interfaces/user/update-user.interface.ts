export interface IUpdateUser {
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly organization: string;
  readonly title: string;
  readonly role: string;
  readonly password: string;
  readonly passwordConfirmation: string;
  readonly forcePasswordChange: boolean;
  readonly currentPassword: string;
}