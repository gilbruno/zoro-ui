/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { useTranslation } from 'translation'
import ConnectWalletBanner from 'pages/Dashboard/ConnectWalletBanner'

export const PolygonUi: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <ConnectWalletBanner title="Polygon connection" description="Connect your wallet to the Polygon Network" buttonLabel='Connect Polygon Network'/>
    </>
  )
}

const Polygon: React.FC = () => {
  return (
    <PolygonUi/>
  )
}

export default Polygon
