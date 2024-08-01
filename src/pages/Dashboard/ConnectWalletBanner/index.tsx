/** @jsxImportSource @emotion/react */
import illustration from "./illustration.png";
import { useStyles } from "./styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { PrimaryButton } from "components";
import { useAuth } from "context/AuthContext";
import React from "react";
import { useTranslation } from "translation";
import { useConnectWallet } from "@web3-onboard/react";


export interface ConnectWalletBannerUiProps {
  isWalletConnected: boolean;
  openAuthModal: () => void;
  title: string
  description: string
  buttonLabel: string
}

export const ConnectWalletBannerUi: React.FC<ConnectWalletBannerUiProps> = ({
  isWalletConnected,
  openAuthModal,
  title,
  description,
  buttonLabel,
  ...containerProps
}) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  if (isWalletConnected) {
    return null;
  }

  return (
    <Paper
      css={styles.container}
      {...containerProps}
      className="connect-wallet-card-wrap"
    >
      <div css={styles.content}>
        <Typography variant="h1" css={styles.title} >
          {title}
        </Typography>

        <Typography css={styles.description} >
          {description}
        </Typography>

        <PrimaryButton css={styles.button} onClick={wallet ? openAuthModal : async () => await connect()} className="custom-btn-wrap">
          {buttonLabel}
        </PrimaryButton>
      </div>

      {/* <div css={styles.illustrationContainer}>
        <img
          src={illustration}
          css={styles.illustration}
          alt={t("dashboard.connectWalletBanner.illustration.alt")}
        />
      </div> */}
    </Paper>
  );
};

interface ConnectWalletProps {
  title?: string,
  description?: string
  buttonLabel?: string
}
const ConnectWalletBanner: React.FC<ConnectWalletProps> = ({title, description, buttonLabel}) => {
  const { accountAddress, openAuthModal } = useAuth();
  const { t } = useTranslation();
  
  return (
    <ConnectWalletBannerUi
      isWalletConnected={!!accountAddress}
      openAuthModal={openAuthModal}
      title={title ? title : t("dashboard.connectWalletBanner.title")}
      description={description ? description : t("dashboard.connectWalletBanner.description")}
      buttonLabel={buttonLabel ? buttonLabel : t("dashboard.connectWalletBanner.buttonLabel")}
    />
  );
};

export default ConnectWalletBanner;
