import BCLCheckout from './components/BCLCheckout'
import { ArrowRight } from './components/Icons'
import { ASSETS } from './data/event'

export default function FunRunShirtPreorder() {
  return (
    <>
      <a className="skip-link" href="#main-content">Langkau ke kandungan</a>
      <header className="site-header">
        <div className="shell header-inner jubilee-store-header">
          <a className="brand" href="../" aria-label="Kembali ke halaman Karnival dan Fun Run">
            <img src={ASSETS.logo} alt="Logo rasmi Yayasan Amal Malaysia" />
            <span>Yayasan Amal<br />Malaysia</span>
          </a>
          <a className="button button-gold header-cta" href="../#pendaftaran">
            Kembali ke Karnival <ArrowRight size={19} />
          </a>
        </div>
      </header>
      <main id="main-content">
        <h1 className="sr-only">Pre-order Baju Fun Run Sahaja</h1>
        <BCLCheckout selected="funrunShirt" registrationIds={['funrunShirt']} />
      </main>
    </>
  )
}
