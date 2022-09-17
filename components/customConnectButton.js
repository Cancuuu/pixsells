import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

const CustomButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    style={{
                      background: "#1061B1",
                      border: "4px solid #1061B1",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      width: "200px",
                      height: "50px",
                      color: "#F8F8F8",
                      fontWeight: "bold",
                      margin: "0px 5px",
                    }}
                  >
                    CONNECT WALLET
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    style={{
                      background: "#1061B1",
                      border: "4px solid #1061B1",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      width: "200px",
                      height: "50px",
                      color: "#F8F8F8",
                      fontWeight: "bold",
                      margin: "0px 5px",
                    }}
                  >
                    Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    type="button"
                    style={{
                      background: "#1061B1",
                      border: "4px solid #1061B1",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      width: "200px",
                      height: "50px",
                      color: "#F8F8F8",
                      fontWeight: "bold",
                      margin: "0px 5px",
                    }}
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <Image
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>
                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomButton;
