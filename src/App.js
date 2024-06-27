import "./App.css";
import logoImg from "./assets/logo2.jpg";
import homeImg from "./assets/home.png";
import recycleImg from "./assets/recycle.png";
import questionImg from "./assets/question-sign.png";
import settingsImg from "./assets/settings.png";
import powerImg from "./assets/power.png";
import magnifyingImg from "./assets/magnifying-glass.png";
import documentImg from "./assets/document.png";
import menuImg from "./assets/menu.png";
import graphImg from "./assets/graph.png";
import whatsappImg from "./assets/whatsapp.png";
import pencilImg from "./assets/pencil.png";
import starImg from "./assets/star.png";
import data from "./data.json";
function App() {
	console.log("data", data.customersData);
	return (
		<section className="main-cont">
			<aside className="sidebar-cont">
				<div className="logo-cont">
					<img
						src={logoImg}
						alt="logo"
					/>
				</div>
				<div className="sidebar">
					<div className="icons-cont">
						<img
							src={homeImg}
							alt=""
						/>
						<img
							src={recycleImg}
							alt=""
						/>
						<img
							src={questionImg}
							alt=""
						/>
						<img
							src={settingsImg}
							alt=""
						/>
						<img
							src={powerImg}
							alt=""
						/>
					</div>
					<div className="opt">
						<h3 className="side-heading">CRM</h3>
						<div className="opt-wrapper">
							<h4>Leads</h4>
							<h4>Prospects</h4>
							<h4>Quotes</h4>
							<h4>Orders</h4>
							<h4>Invoices</h4>
							<h4>Recory</h4>
							<h4>Contracts</h4>
							<h4>Support</h4>
						</div>
					</div>
					<div className="opt">
						<h3 className="side-heading">ERP</h3>
						<div className="opt-wrapper">
							<h4>Amount</h4>
							<h4>Purchases</h4>
							<h4>Purch Orders</h4>
							<h4>Inventory</h4>
							<h4>Manufacturing</h4>
							<h4>Tasks</h4>
						</div>
					</div>
					<div className="opt">
						<h3 className="side-heading">Network</h3>
						<div className="opt-wrapper">
							<h4>Connections</h4>
							<h4>Your Store</h4>
							<h4>Search</h4>
						</div>
					</div>
				</div>
			</aside>
			<section className="main-section">
				<header className="header">
					<h1>Raw Leads</h1>
					<div className="right-menu">
						<img
							src={starImg}
							alt=""
						/>
						<div className="input-cont">
							<img
								src={magnifyingImg}
								alt=""
							/>
							<input
								type="text"
								placeholder="search"
							/>
						</div>
						<div className="number">4,338</div>
						<div className="import">Import</div>
						<div className="lead">Add Lead</div>
						<div className="img-cont">
							<img
								src={documentImg}
								alt=""
							/>
						</div>
						<div className="img-cont">
							<img
								src={menuImg}
								alt=""
							/>
						</div>
						<div className="img-cont">
							<img
								src={settingsImg}
								alt=""
							/>
						</div>
					</div>
				</header>
				<section className="dropdown-cont">
					<div className="row">
						<select
							name=""
							id="">
							<option value="active">Active</option>
							<option value="inactive">In Active</option>
						</select>
						<select
							name=""
							id="">
							<option value="active">Fin year</option>
							<option value="inactive">first year</option>
						</select>
						<select
							name=""
							id="">
							<option value="active">2023 - 2024</option>
							<option value="inactive">2022 - 2023</option>
						</select>
						<div>
							<input
								type="checkbox"
								id="leads"
							/>
							<label htmlFor="leads">Select all Leads</label>
						</div>
					</div>
					<div className="row">
						<select
							name=""
							id="">
							<option value="active">Select Source</option>
							<option value="inactive">sources</option>
						</select>
						<select
							name=""
							id="">
							<option value="active">Select Executive</option>
							<option value="inactive">Executive</option>
						</select>
						<select
							name=""
							id="">
							<option value="active">Select Designation</option>
							<option value="inactive">Designation</option>
						</select>
						<select
							name=""
							id="">
							<option value="active">All appointments</option>
							<option value="inactive">appointment</option>
						</select>
						<div className="filter-product">Filter Product</div>
					</div>
					<div className="row">
						<div className="appointments">
							<span>Missed Appointments : 718</span>
							<img
								src={graphImg}
								alt=""
							/>
						</div>
						<div className="appointments">
							<span>No Appointments Set : 3,619</span>
							<img
								src={graphImg}
								alt=""
							/>
						</div>
						<div className="appointments">
							<span>No interaction Leads : 2,061</span>
							<img
								src={graphImg}
								alt=""
							/>
						</div>
						<div className="appointments">
							<span>Unassigned Leads : 40</span>
						</div>
					</div>
				</section>
				<section className="data-cont">
					<div className="data-headings">
						<h4 className="customer-heading">Customer</h4>
						<h4 className="source-heading">Source</h4>
						<h4 className="since-heading">since</h4>
						<h4 className="poc-heading">POC</h4>
						<h4 className="last-heading">Last Talk</h4>
						<h4 className="next-heading">Next</h4>
					</div>
					<div className="dataWrapper">
						{data.customersData.map((customer) => {
							return (
								<div className="customerRow">
									<div className="customer-heading">
										<input
											type="checkbox"
											name=""
											id=""
										/>
										<img
											class="table-star"
											src={starImg}
											alt=""
										/>
										<span>{customer.name}</span>
									</div>
									<h4 className="source-heading">
										{customer.source}
									</h4>
									<h4 className="since-heading">
										{customer.since}
									</h4>
									<h4 className="poc-heading">
										{customer.POC}
									</h4>
									<h4 className="last-heading">
										{customer.lastTalk}
									</h4>
									<div className="next-heading">
										<span>{customer.next}</span>
										<div class="whatsapp-wrapper">
											<div class="whatsapp-cont">
												<img
													src={whatsappImg}
													alt="whatsapp"
												/>
											</div>
											<div class="edit-cont">
												<img
													src={pencilImg}
													alt="edit"
												/>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
				<div className="pagination">
					<div style={{ borderTopLeftRadius: "8px" }}>Prev</div>
					<div style={{ backgroundColor: "rgb(4,4,26)", color: "white" }}>
						1
					</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>...</div>
					<div>434</div>
					<div style={{ borderTopRightRadius: "8px" }}>Next</div>
				</div>
			</section>
		</section>
	);
}

export default App;
