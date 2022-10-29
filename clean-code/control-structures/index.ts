main();

type Transaction = {
  [key: string]: string;
};

type Transactions = Transaction[];

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions: Transactions) {
  if (isEmpty(transactions)) {
    showErrorMessage("No transaction provided!");
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function isEmpty(transactions: Transactions) {
  return !transactions || transactions.length <= 0;
}

function showErrorMessage(message: string, item?: any) {
  console.log(message);

  if (item) {
    console.log(item);
  }
}

function processTransaction(transaction: Transaction) {
  if (!isOpen(transaction)) {
    showErrorMessage("Invalid transaction type!");
    return;
  }

  if (useTransactionMethod(transaction, "CREDIT_CARD")) {
    processCreditCardTransaction(transaction);
  } else if (useTransactionMethod(transaction, "PAYPAL")) {
    processPaypalTransaction(transaction);
  } else if (useTransactionMethod(transaction, "PLAN")) {
    processPlanTransaction(transaction);
  }
}

function isOpen(transaction: Transaction) {
  return transaction.status === "OPEN";
}

function useTransactionMethod(transaction: Transaction, method: string) {
  return transaction.method === method;
}

function isPayment(transaction: Transaction) {
  return transaction.status === "PAYMENT";
}

function isRefund(transaction: Transaction) {
  return transaction.status === "REFUND";
}

function processCreditCardTransaction(transaction: Transaction) {
  if (isPayment(transaction)) {
    processCreditCardPayment(transaction);
  } else if (isRefund(transaction)) {
    processCreditCardRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!", transaction);
  }
}

function processPaypalTransaction(transaction: Transaction) {
  if (isPayment(transaction)) {
    processPayPalPayment(transaction);
  } else if (isRefund(transaction)) {
    processPayPalRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!", transaction);
  }
}

function processPlanTransaction(transaction: Transaction) {
  if (isPayment(transaction)) {
    processPlanPayment(transaction);
  } else if (isRefund(transaction)) {
    processPlanRefund(transaction);
  } else {
    showErrorMessage("Invalid transaction type!", transaction);
  }
}

function processCreditCardPayment(transaction: Transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction: Transaction) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction: Transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction: Transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction: Transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction: Transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}
