import { ProductList } from "@/components/product-list";
import { products } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ProductsPage() {
  const categories = [...new Set(products.map(p => p.category))];
  const maxPrice = Math.ceil(Math.max(...products.map(p => p.price)));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">All Products</h1>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl mx-auto">
          Explore our complete collection of curated items, designed with elegance and crafted for longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="sticky top-20">
            <h2 className="text-2xl font-semibold mb-6">Filters</h2>
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger className="text-lg font-medium">Category</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 p-1">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label htmlFor={category} className="font-normal">{category}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="price">
                <AccordionTrigger className="text-lg font-medium">Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="p-2">
                    <Slider
                      defaultValue={[maxPrice]}
                      max={maxPrice}
                      step={10}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>$0</span>
                      <span>${maxPrice}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>

        <main className="lg:col-span-3">
          <ProductList initialProducts={products.slice(0, 8)} allProducts={products} />
        </main>
      </div>
    </div>
  );
}
