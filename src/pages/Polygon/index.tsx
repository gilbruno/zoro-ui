/** @jsxImportSource @emotion/react */
import ConnectWalletBanner from './ConnectWalletBanner'
import { useGetPools } from 'clients/api'
import { TOKENS } from 'constants/tokens'
import { useAuth } from 'context/AuthContext'
import React, { useState } from 'react'
import { useTranslation } from 'translation'
import { useConnectWallet, useSetChain } from "@web3-onboard/react";

export const PolygonUi: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <ConnectWalletBanner title="Polygon connection" description="Connect your wallet to the Polygon Network" buttonLabel='Connect Polygon Network'/>
    </>
  )
}

const Polygon: React.FC = () => {
  const { accountAddress } = useAuth()
  const [{ connectedChain }, setChain] = useSetChain();
  
  console.log("connectedChain : ", connectedChain)
  return (
    <PolygonUi/>
  )
}

export default Polygon
