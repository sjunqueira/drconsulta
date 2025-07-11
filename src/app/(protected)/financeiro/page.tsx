import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  PageContainer,
  PageContent,
  PageHeader,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "../components/pagecontainer";

const FinancePage = () => {
  return (
    <PageContainer>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <Link href="/">Financeiro</Link>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Financeiro</PageHeaderTitle>
          <PageHeaderDescription>
            Gerencie as suas finanças
          </PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageContent>Conteúdo</PageContent>
    </PageContainer>
  );
};

export default FinancePage;
