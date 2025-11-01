import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TrendingDown, Truck, Factory, Sprout } from "lucide-react"
import Link from "next/link"

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-teal-600">minerva</div>
            <div className="text-sm text-gray-600">FOODS</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Locations
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Sustainability
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Investors
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600">EN</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/cattle-grazing-in-green-pasture-field.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Commitment to
            <br />
            Sustainability
          </h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="container mx-auto px-4 py-16 max-w-4xl text-center">
        <p className="text-gray-600 leading-relaxed">
          At Minerva Foods, sustainability is at the core of our business model and part of our DNA. Minerva's
          commitment to sustainability is reflected in our practices and in our long-term vision, which aims to promote
          a positive impact on the environment, society, and economy.
        </p>
      </section>

      {/* Road MAP 2025 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            <span className="text-teal-600">&gt;</span> Road MAP 2025
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl">
            In 2020, we launched our sustainability plan, managed by a committee made up of our main stakeholders. It is
            a plan with clear targets and deadlines, aligned with the best practices and with the main global
            sustainability agendas.
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 2025 Card */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="w-px h-12 bg-gray-300 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-teal-600">2025</div>
                </div>
              </div>
              <Card className="p-6 bg-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded">
                    Short term
                  </span>
                </div>
                <div className="mb-4">
                  <Factory className="w-12 h-12 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Eco-efficiency in managed operations</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Reduce water consumption</li>
                  <li>• Reduce energy consumption</li>
                  <li>• Increase renewable energy use</li>
                  <li>• Reduce waste generation</li>
                  <li>• Increase waste recycling</li>
                </ul>
              </Card>
            </div>

            {/* 2030 Card */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="w-px h-12 bg-gray-300 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-400">2030</div>
                </div>
              </div>
              <Card className="p-6 bg-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded">
                    Mid term
                  </span>
                </div>
                <div className="mb-4">
                  <Truck className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Supply chain management - direct suppliers</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Monitor 100% of direct suppliers</li>
                  <li>• Zero deforestation in supply chain</li>
                  <li>• Promote sustainable practices</li>
                  <li>• Ensure animal welfare standards</li>
                </ul>
              </Card>
            </div>

            {/* 2035 Card */}
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="w-px h-12 bg-gray-300 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-gray-400">2035</div>
                </div>
              </div>
              <Card className="p-6 bg-white">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-700 text-white text-xs font-semibold rounded">
                    Long term
                  </span>
                </div>
                <div className="mb-4">
                  <TrendingDown className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Carbon footprint reduction</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Achieve carbon neutrality</li>
                  <li>• Implement carbon offset programs</li>
                  <li>• Reduce GHG emissions</li>
                  <li>• Support regenerative agriculture</li>
                </ul>
              </Card>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-teal-600" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          <span className="text-teal-600">&gt;</span> Strategy
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          Minerva's strategy is based on three pillars: social and economic accountability, care for the environment,
          and transparency in our operations. We believe that these pillars are essential to ensure the long-term
          sustainability of our business and the well-being of our stakeholders.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div
            className="aspect-[4/3] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('/brown-cattle-in-green-pasture.jpg')` }}
          />
          <div
            className="aspect-[4/3] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('/aerial-view-meat-processing-facility.jpg')` }}
          />
          <div
            className="aspect-[4/3] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url('/food-safety-workers-in-white-coats-and-hairnets.jpg')` }}
          />
        </div>

        <p className="text-gray-600 text-center max-w-4xl mx-auto">
          Minerva Foods believes that the future of food production is in sustainability. We are committed to leading
          the way in sustainable beef production, ensuring that our operations are environmentally responsible, socially
          beneficial, and economically viable for generations to come.
        </p>
      </section>

      {/* Quote Section */}
      <section className="bg-slate-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('/professional-business-executive-portrait-sitting.jpg')` }}
            />
            <div>
              <p className="text-lg leading-relaxed mb-6">
                "We believe that sustainability is not just a responsibility, but an opportunity to lead the industry
                towards a more sustainable future. Our commitment goes beyond compliance - it's about creating lasting
                positive impact for our planet, our communities, and future generations. Through innovation,
                transparency, and collaboration, we are working to transform the way beef is produced and consumed
                globally, ensuring that quality and sustainability go hand in hand."
              </p>
              <p className="font-semibold">Fernando Galletti de Queiroz</p>
              <p className="text-sm text-gray-300">CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-400">OUR</span>
            <br />
            <span className="text-teal-600">GOALS</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our sustainability goals are aligned with the United Nations Sustainable Development Goals (SDGs) and
            reflect our commitment to creating a positive impact across our entire value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Goal 1 */}
          <Card className="p-8 border-b-4 border-b-teal-600">
            <div className="mb-4">
              <Factory className="w-12 h-12 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Eco-efficiency in
              <br />
              managed operations
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We continuously work to reduce our environmental footprint by optimizing resource use, minimizing waste,
              and increasing the use of renewable energy across all our facilities.
            </p>
            <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold">
              → Learn more
            </Button>
          </Card>

          {/* Goal 2 */}
          <Card className="p-8 border-b-4 border-b-teal-600">
            <div className="mb-4">
              <Truck className="w-12 h-12 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Supply chain
              <br />
              management
              <br />
              <span className="text-sm font-normal text-gray-600">direct suppliers</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Monitoring 100% of our direct suppliers to ensure compliance with environmental and social standards,
              including zero deforestation commitments.
            </p>
            <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold">
              → Learn more
            </Button>
          </Card>

          {/* Goal 3 */}
          <Card className="p-8 border-b-4 border-b-teal-600">
            <div className="mb-4">
              <Truck className="w-12 h-12 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Supply chain
              <br />
              management
              <br />
              <span className="text-sm font-normal text-gray-600">indirect providers</span>
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Extending our monitoring and engagement to indirect suppliers to ensure sustainability practices
              throughout the entire supply chain.
            </p>
            <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold">
              → Learn more
            </Button>
          </Card>

          {/* Goal 4 */}
          <Card className="p-8 border-b-4 border-b-teal-600">
            <div className="mb-4">
              <Sprout className="w-12 h-12 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Low carbon emission
              <br />
              livestock
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Implementing innovative practices and technologies to reduce greenhouse gas emissions from livestock,
              supporting the transition to regenerative agriculture.
            </p>
            <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold">
              → Learn more
            </Button>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/dark-forest-landscape-at-dusk.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 text-balance">
              The race to
              <br />
              net issue
              <br />
              cannot be one
              <br />
              <span className="bg-red-600 px-2">collective effort</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Minerva Foods is engaged in a collaborative effort to achieve net zero emissions across our operations and
              supply chain. We recognize that this ambitious goal requires partnership, innovation, and commitment from
              all stakeholders. Together, we are working towards a sustainable future where beef production contributes
              positively to climate action and environmental preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Related Content</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <div
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url('/green-pasture-landscape.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold">Responsible Sourcing</h3>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url('/renewable-energy-solar-panels.png')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold">Renewable Energy</h3>
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <div
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url('/community-development-people.jpg')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white font-bold">Community Impact</h3>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-teal-600">minerva</div>
              <div className="text-xs text-gray-600">FOODS</div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-gray-900">
                Cookie Policy
              </Link>
            </div>
            <p>© 2025 Minerva Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
