# Cryptodo

Welcome to Cryptodo! The security conscious todo list you know you can trust.

Sort of.

## Background

We tried. We really did. But our todo list application is just chock full of
security problems.

Say, you look like a developer. Maybe you can help us out!

## Todo

### Hash the passwords!

I'm pretty sure the user sign up endpoint isn't actually hashing passwords
before saving them. Please make sure passwords get hashed!

### Fix access control

Passwords are being hashed. Great! But now users can't read their todos any
more. Not great! Let's fix that.

### Token based access

Passwords are getting hashed now, which is fantastic. But we're still relying on
basic auth, which means users must send their username and password with every
request. Let's implement JSON Web Tokens.
