export const PAYPAL = {
  sandboxId:
    "AXyuMJEpKkrKG0BvMMouM7A7eDDTRcwNbCW1a5CnvH4XDSNW1Arb0tYM2_JYT-xLhn2590VNmoPdHLea",
  liveId:
    "AfWZQRU3dpDqg2kc8SHrXZ94OKMvCSWoNp3mzKXsq3XvIv9TRdCrwe5eNglwLAXNh_X7P_JX4sThbqsM",
};

export const getPaypalId = () => {
  if (process.env.NODE_ENV === "development") {
    return PAYPAL.sandboxId;
  } else {
    return PAYPAL.liveId;
  }
};
