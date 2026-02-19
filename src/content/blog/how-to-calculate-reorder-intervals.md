---
title: "How to Calculate Customer Reorder Intervals for Your Shopify Store"
date: 2026-02-15
category: "Customer Retention"
excerpt: "Your customers are running out of your product right now. Here's how to figure out exactly when they'll need to reorder — and how to reach them at the perfect moment."
image: "/images/blog/reorder-intervals.svg"
relatedApp: "buyagain"
---

Every Shopify store selling consumable or replenishable products faces the same challenge: **when exactly will your customers need to buy again?**

Get the timing right, and you'll send a perfectly-timed reminder that feels helpful rather than spammy. Get it wrong, and you're either annoying customers too early or losing them to competitors because you reached out too late.

## The Problem with Arbitrary Timers

Most email marketing advice tells you to set up a post-purchase flow that triggers after a fixed number of days — usually 30, 60, or 90 days. But here's the problem: this approach treats all products and all customers exactly the same.

A customer who buys a 30-day supply of vitamins has very different reorder timing than someone who buys a 3-month supply of dog food. And a customer who buys in bulk behaves differently than one who orders single units.

**Arbitrary timers lead to three failure modes:**

1. **Too early**: The customer still has plenty of product. Your reminder feels pushy.
2. **Too late**: They already reordered from Amazon or a competitor.
3. **Wrong product**: You're promoting a product they don't need while ignoring one they do.

## The Data-Driven Approach

Instead of guessing, you can calculate the actual reorder interval from your existing order data. Here's the method:

### Step 1: Identify Repeat Purchases

Look at all orders where the same customer bought the same product (or variant) more than once. These repeat purchases contain the signal you need.

### Step 2: Calculate Individual Intervals

For each pair of consecutive purchases, calculate the number of days between them. For example:

- Customer A bought Product X on January 1 and again on January 28 → 27-day interval
- Customer A bought Product X on January 28 and again on February 22 → 25-day interval
- Customer B bought Product X on March 1 and again on April 2 → 32-day interval

### Step 3: Use the Median, Not the Mean

Here's where most people go wrong: they average all the intervals. But averages are skewed by outliers. A single customer who took 200 days to reorder will throw off your entire calculation.

**Use the median instead.** The median is the middle value when you sort all intervals. It's much more robust to outliers and gives you the "typical" reorder behavior.

Using our example above:
- Intervals: 25, 27, 32 days
- Sorted: 25, 27, 32
- Median: 27 days

### Step 4: Apply a Buffer

Customers don't reorder the exact day they run out. They might reorder a few days early (planning ahead) or a few days late (procrastinating).

A good rule of thumb: **reach out when 80% of the median interval has passed.** This catches customers while they're thinking about reordering but before they've looked elsewhere.

## Putting It Into Practice

Let's say your data shows that customers typically reorder your coffee beans every 28 days. Here's what a smart reorder flow looks like:

1. **Day 22 (80% of interval)**: Send a gentle reminder with a link to reorder
2. **Day 28**: If no purchase, send a "running low?" email
3. **Day 35**: Final reminder with a small incentive

This approach dramatically outperforms the spray-and-pray method of monthly emails to everyone.

## Segment by Product, Not Just Store-Wide

Different products have different consumption rates. Your 250g coffee bag has a different interval than your 1kg bag. Calculate intervals per product (or product variant) for the most accurate predictions.

Even better: segment by quantity. A customer who orders 3 bags at once will have a longer interval than one who orders 1 bag.

## Tools to Help

Calculating reorder intervals manually from your Shopify data is tedious and error-prone. You'd need to:

1. Export all orders
2. Match orders by customer and product
3. Calculate intervals
4. Find medians per product
5. Keep the data updated as new orders come in

This is exactly why we built **BuyAgain**. It does all this math automatically and keeps your predictions fresh as new orders arrive. You get a dashboard showing which customers are overdue for their next purchase, sorted by revenue at risk.

## Key Takeaways

1. **Don't guess reorder timing** — calculate it from real purchase data
2. **Use the median** of repeat purchase intervals, not the average
3. **Segment by product** — different products have different consumption rates
4. **Reach out early** — aim for 80% of the interval to catch customers before they look elsewhere
5. **Automate it** — manual calculations get stale and error-prone

Your customers' reorder behavior is already hidden in your order data. You just need to extract it.
