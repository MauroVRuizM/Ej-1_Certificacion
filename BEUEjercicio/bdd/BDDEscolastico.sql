USE [BDDESCOLASTICO]
GO
/****** Object:  Table [dbo].[Alumno]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alumno](
	[idalumno] [int] IDENTITY(1,1) NOT NULL,
	[nombres] [varchar](50) NULL,
	[apellidos] [varchar](50) NULL,
	[cedula] [varchar](15) NULL,
	[fecha_nacimiento] [date] NULL,
	[lugar_nacimiento] [varchar](50) NULL,
	[sexo] [nchar](1) NULL,
 CONSTRAINT [PK_Alumno] PRIMARY KEY CLUSTERED 
(
	[idalumno] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Area]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Area](
	[idarea] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[coordinador] [varchar](50) NULL,
 CONSTRAINT [PK_Area] PRIMARY KEY CLUSTERED 
(
	[idarea] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Calificacion]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calificacion](
	[idcalificacion] [int] IDENTITY(1,1) NOT NULL,
	[valor] [decimal](4, 2) NULL,
	[fecha] [datetime] NULL,
	[unidad] [nchar](1) NULL,
	[idmatricula] [int] NULL,
 CONSTRAINT [PK_Calificacion] PRIMARY KEY CLUSTERED 
(
	[idcalificacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Materia]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Materia](
	[idmateria] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](75) NULL,
	[nrc] [nchar](5) NULL,
	[creditos] [smallint] NULL,
	[idarea] [int] NULL,
 CONSTRAINT [PK_Materia] PRIMARY KEY CLUSTERED 
(
	[idmateria] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Matricula]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Matricula](
	[idmatricula] [int] IDENTITY(1,1) NOT NULL,
	[fecha] [datetime] NULL,
	[costo] [decimal](18, 2) NULL,
	[estado] [nchar](1) NULL,
	[tipo] [nchar](1) NULL,
	[idalumno] [int] NULL,
	[idmateria] [int] NULL,
 CONSTRAINT [PK_Matricula] PRIMARY KEY CLUSTERED 
(
	[idmatricula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TiposBeca]    Script Date: 3/8/2020 21:33:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TiposBeca](
	[idtipobeca] [int] IDENTITY(1,1) NOT NULL,
	[tipo] [varchar](70) NULL,
	[nombre] [varchar](70) NULL,
	[persona_objetivo] [varchar](50) NULL,
	[monto] [decimal](7, 2) NULL,
	[fecha_aprobacion] [date] NULL,
	[requisitos] [varchar](200) NULL,
 CONSTRAINT [PK_TiposBeca] PRIMARY KEY CLUSTERED 
(
	[idtipobeca] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Alumno] ON 

INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (1, N'Mauro Valentin', N'Ruiz Moreno', N'1600594954', CAST(N'1999-11-08' AS Date), N'Shell', N'H')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (4, N'Juan Esteban', N'Roa Mena', N'1544787896', CAST(N'2020-07-12' AS Date), N'Latacunga', N'H')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (5, N'Pedro Andres', N'Lema Lopez', N'1322020215', CAST(N'2020-07-22' AS Date), N'Quito', N'H')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (6, N'Maria Armena', N'Rios', N'1355686878', CAST(N'2020-07-08' AS Date), N'Latacunga', N'M')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (7, N'Juan Diego', N'Lema Lopez', N'1355474786', CAST(N'2020-07-25' AS Date), N'Shell', N'H')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (8, N'Elena Esmeralda', N'Silva Roa', N'1212151514', CAST(N'2020-08-06' AS Date), N'Shell', N'M')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (9, N'Fernanda Liz', N'Morales Sosa', N'1200323254', CAST(N'2020-07-29' AS Date), N'Esmeraldas', N'M')
INSERT [dbo].[Alumno] ([idalumno], [nombres], [apellidos], [cedula], [fecha_nacimiento], [lugar_nacimiento], [sexo]) VALUES (10, N'Julia Estefania', N'Aguilar Mendoza', N'1788545412', CAST(N'2020-07-23' AS Date), N'Quito', N'M')
SET IDENTITY_INSERT [dbo].[Alumno] OFF
SET IDENTITY_INSERT [dbo].[Area] ON 

INSERT [dbo].[Area] ([idarea], [nombre], [coordinador]) VALUES (1, N'Electrica y Electrónica', N'Eddy Galarza')
INSERT [dbo].[Area] ([idarea], [nombre], [coordinador]) VALUES (2, N'Ciencias de la Computación', N'Fabian Montaluisa')
SET IDENTITY_INSERT [dbo].[Area] OFF
SET IDENTITY_INSERT [dbo].[Materia] ON 

INSERT [dbo].[Materia] ([idmateria], [nombre], [nrc], [creditos], [idarea]) VALUES (1, N'Programación I', N'2015 ', 4, 2)
INSERT [dbo].[Materia] ([idmateria], [nombre], [nrc], [creditos], [idarea]) VALUES (2, N'Redes de Datos II', N'1377 ', 4, 1)
INSERT [dbo].[Materia] ([idmateria], [nombre], [nrc], [creditos], [idarea]) VALUES (3, N'Laboratorio Web', N'1889 ', 10, 2)
INSERT [dbo].[Materia] ([idmateria], [nombre], [nrc], [creditos], [idarea]) VALUES (4, N'POO', N'4516 ', 6, 2)
INSERT [dbo].[Materia] ([idmateria], [nombre], [nrc], [creditos], [idarea]) VALUES (5, N'Electrónica', N'5784 ', 3, 1)
SET IDENTITY_INSERT [dbo].[Materia] OFF
SET IDENTITY_INSERT [dbo].[Matricula] ON 

INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1, CAST(N'2020-07-08T18:19:36.227' AS DateTime), CAST(0.00 AS Decimal(18, 2)), N'1', N'P', 1, 1)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (2, CAST(N'2020-07-08T18:19:54.873' AS DateTime), CAST(0.00 AS Decimal(18, 2)), N'1', N'P', 1, 2)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1002, CAST(N'2020-07-16T10:19:06.237' AS DateTime), CAST(98.00 AS Decimal(18, 2)), N'1', N'T', 7, 1)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1003, CAST(N'2020-07-16T10:19:13.917' AS DateTime), CAST(0.00 AS Decimal(18, 2)), N'1', N'P', 9, 4)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1004, CAST(N'2020-07-16T10:19:23.640' AS DateTime), CAST(0.00 AS Decimal(18, 2)), N'1', N'P', 1, 5)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1005, CAST(N'2020-07-16T10:19:32.677' AS DateTime), CAST(122.50 AS Decimal(18, 2)), N'1', N'S', 6, 3)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1006, CAST(N'2020-07-16T10:19:41.633' AS DateTime), CAST(36.75 AS Decimal(18, 2)), N'1', N'S', 5, 5)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1007, CAST(N'2020-07-16T10:19:51.087' AS DateTime), CAST(49.00 AS Decimal(18, 2)), N'1', N'S', 7, 2)
INSERT [dbo].[Matricula] ([idmatricula], [fecha], [costo], [estado], [tipo], [idalumno], [idmateria]) VALUES (1008, CAST(N'2020-07-16T10:19:59.550' AS DateTime), CAST(245.00 AS Decimal(18, 2)), N'1', N'T', 4, 3)
SET IDENTITY_INSERT [dbo].[Matricula] OFF
SET IDENTITY_INSERT [dbo].[TiposBeca] ON 

INSERT [dbo].[TiposBeca] ([idtipobeca], [tipo], [nombre], [persona_objetivo], [monto], [fecha_aprobacion], [requisitos]) VALUES (1, N'Beca de Acceso', N'Beca Shrodingger', N'Estudiantes Universitarios', CAST(500.55 AS Decimal(7, 2)), CAST(N'2020-02-19' AS Date), N'Estudiar en el país')
INSERT [dbo].[TiposBeca] ([idtipobeca], [tipo], [nombre], [persona_objetivo], [monto], [fecha_aprobacion], [requisitos]) VALUES (3, N'Beca para la movilidad', N'Beca Roadster', N'Estudiantes', CAST(900.62 AS Decimal(7, 2)), CAST(N'2020-08-11' AS Date), N'Estudiantes que vivan a más de 15 cuadras de la institución')
INSERT [dbo].[TiposBeca] ([idtipobeca], [tipo], [nombre], [persona_objetivo], [monto], [fecha_aprobacion], [requisitos]) VALUES (4, N'Beca de Trabajo', N'Beca Ranger', N'Trabajadores en general', CAST(20147.15 AS Decimal(7, 2)), CAST(N'2015-11-19' AS Date), N'Dos meses en labor')
SET IDENTITY_INSERT [dbo].[TiposBeca] OFF
ALTER TABLE [dbo].[Calificacion]  WITH CHECK ADD  CONSTRAINT [FK_Calificacion_Matricula] FOREIGN KEY([idmatricula])
REFERENCES [dbo].[Matricula] ([idmatricula])
GO
ALTER TABLE [dbo].[Calificacion] CHECK CONSTRAINT [FK_Calificacion_Matricula]
GO
ALTER TABLE [dbo].[Materia]  WITH CHECK ADD  CONSTRAINT [FK_Materia_Area] FOREIGN KEY([idarea])
REFERENCES [dbo].[Area] ([idarea])
GO
ALTER TABLE [dbo].[Materia] CHECK CONSTRAINT [FK_Materia_Area]
GO
ALTER TABLE [dbo].[Matricula]  WITH CHECK ADD  CONSTRAINT [FK_Matricula_Alumno] FOREIGN KEY([idalumno])
REFERENCES [dbo].[Alumno] ([idalumno])
GO
ALTER TABLE [dbo].[Matricula] CHECK CONSTRAINT [FK_Matricula_Alumno]
GO
ALTER TABLE [dbo].[Matricula]  WITH CHECK ADD  CONSTRAINT [FK_Matricula_Materia] FOREIGN KEY([idmateria])
REFERENCES [dbo].[Materia] ([idmateria])
GO
ALTER TABLE [dbo].[Matricula] CHECK CONSTRAINT [FK_Matricula_Materia]
GO
