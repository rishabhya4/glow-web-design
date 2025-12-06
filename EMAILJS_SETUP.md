# EmailJS Setup Instructions for GrowOn

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose "Gmail" and connect your growonagency01@gmail.com account
4. Copy your **SERVICE_ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Template Name: "Quote Request"
4. Use this template content:

```
Subject: New Quote Request from {{from_name}}

Hello,

You have received a new quote request:

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Selected Services:
{{services}}

Message:
{{message}}

---
This email was sent from your GrowOn website contact form.
```

5. Copy your **TEMPLATE_ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key
1. Go to "Account" in the dashboard
2. Find "API Keys" section
3. Copy your **PUBLIC_KEY** (looks like: -xxxxxxxxxxx)

## Step 5: Update Configuration
1. Open `/src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_PUBLIC_KEY` → Your actual public key
   - `YOUR_SERVICE_ID` → Your actual service ID
   - `YOUR_TEMPLATE_ID` → Your actual template ID

## Step 6: Test
1. Go to your website
2. Click "Book A Meeting"
3. Fill out the form
4. Submit
5. Check growonagency01@gmail.com for the email!

## Troubleshooting
- Make sure growonagency01@gmail.com is connected to EmailJS
- Check EmailJS dashboard for error logs
- Verify all IDs are copied correctly
- Check browser console for errors

## Current Status
✅ EmailJS library installed
✅ Configuration file created
✅ BookingModal ready (needs IDs)
✅ Mobile menu fixed (no scrolling)

## What's Working Now
- Mobile menu now shows all items without scrolling
- Contact form UI is ready
- Just need to add your EmailJS credentials to start receiving emails
